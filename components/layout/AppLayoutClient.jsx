import { Header } from './Header';

export function AppLayoutClient({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
