import styles from "@/styles/Button.module.css";

interface ButtonProps {
  label: string;
}

export default function ButtonComponent({ label }: ButtonProps) {
  return (
    <button className={styles.button}>{label}</button>
  );
}
