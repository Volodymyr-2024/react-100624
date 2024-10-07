import LogoList from "./LogoList";
import classes from "./BrandList.module.css";

export default function BrandList() {
  return (
    <div className={classes.brandContainer}>
      <p className={classes.helpText}>Помогаем найти работу:</p>
      <LogoList />
    </div>
  );
}
