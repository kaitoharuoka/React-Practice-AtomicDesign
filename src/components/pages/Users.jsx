import styled from "styled-components";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `かいと${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "12345@example.com",
    phone: "080-1212-3434",
    company: {
      name: "テスト会社名"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
