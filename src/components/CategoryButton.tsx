import { useRouter } from "next/router";
import styles from "@/styles/CategoryButton.module.css";

interface CategoryButtonProps {
  label: string;
  icon: string;
  route: string;
}

export default function CategoryButton({ label, icon, route }: CategoryButtonProps) {
  const router = useRouter();

  return (
    <div className={styles.categoryButton} onClick={() => router.push(route)}>
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>
  );
}
