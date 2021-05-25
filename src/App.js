import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "かいと",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "12345@example.com",
  phone: "080-1212-3434",
  company: {
    name: "テスト会社名"
  },
  website: "https://google.com"
};

export default function App() {
  return <Router />;
}
