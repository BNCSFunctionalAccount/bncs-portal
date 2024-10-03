import { Header } from '../components/Header';

export default function LandingPage() {
  return (
    <main>
      <Header />
      <div className="flex flex-col justify-center h-[80vh] items-center gap-4">
        <h1 className="text-7xl text-center font-medium">
          Welcome to the BNCS Product Portal
        </h1>
        <p>
          Our team is here to help. Access our knowledge base, submit a ticket,
          and get in touch with us.
        </p>
      </div>
    </main>
  );
}
