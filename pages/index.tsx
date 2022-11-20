// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

//importing relevant modules
import Layout from '../ui/widgets/Layout'
import Landingpage from '../ui/widgets/Landingpage';

// JSX Component
export default function Home() {
  const setBackground: boolean = false;
  return (
     <Layout background={setBackground}>
        <Landingpage />
     </Layout>
  )
}
