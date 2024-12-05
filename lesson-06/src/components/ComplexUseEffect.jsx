import React, { useCallback, useEffect, useState } from "react";

// Симуляция API для получения погодных данных
const fetchWeatherData = async (city) => {
  // Имитация задержки сети
  await new Promise((resolve) => setTimeout(resolve, 500));

  const weatherData = {
    Москва: { temp: 5, humidity: 75, wind: 12 },
    "Санкт-Петербург": { temp: 2, humidity: 85, wind: 18 },
    Новосибирск: { temp: -3, humidity: 60, wind: 8 },
  };

  return weatherData[city] || null;
};

const WeatherTracker = ({ city, updateInterval = 10000 }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Функция для загрузки погоды
  const loadWeather = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchWeatherData(city);

      if (data) {
        setWeatherData(data);
        setError(null);
      } else {
        setError(`Данные для города ${city} не найдены`);
      }
    } catch (err) {
      setError("Ошибка при загрузке погоды");
    } finally {
      setLoading(false);
    }
  }, [city]);

  useEffect(() => {
    // Переменная для отслеживания mounted состояния
    let isMounted = true;
    let intervalId;
    const runWeatherFetch = async () => {
      if (isMounted) {
        await loadWeather();
      }
      // Установка повторяющегося интервала только если компонент смонтирован
      if (isMounted) {
        intervalId = setInterval(async () => {
          if (isMounted) {
            await loadWeather();
          }
        }, updateInterval);
      }
    };
    // Запуск начальной загрузки
    runWeatherFetch();
    // Функция очистки
    return () => {
      // Сброс флага mounted
      isMounted = false;
      // Очистка интервала, если он существует
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [city, updateInterval, loadWeather]);

  // Рендеринг данных
  return (
    <div>
      <h2>Погода в {city}</h2>
      {loading && <p>Загрузка...</p>}
      {error && <p>{error}</p>}
      {weatherData && !loading && (
        <div>
          <p>Температура: {weatherData.temp}°C</p>
          <p>Влажность: {weatherData.humidity}%</p>
          <p>Скорость ветра: {weatherData.wind} км/ч</p>
        </div>
      )}
    </div>
  );
};

export default WeatherTracker;
