import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SeconaryButton";
import { UserCard } from "./components/organisms/user/UserCard";
import { SearchInput } from "./molecules/SearchInput";
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
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
