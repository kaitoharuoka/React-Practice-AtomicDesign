import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SeconaryButton";
import { UserCard } from "./components/organisms/user/UserCard";
import { SearchInput } from "./molecules/SearchInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard />
    </div>
  );
}
