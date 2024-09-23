import Link from 'next/link'

export default function Container({ children }: { children: React.ReactNode }) {
  return (


    <div className="container">
      <header className="header">
        <h3>Dashboard</h3>
      </header>
      <main>{children}</main>
      <footer className="footer">
      </footer>
    </div>
  )
}