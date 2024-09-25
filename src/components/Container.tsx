export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-0 mx-auto">
      <header className="flex border-b border-b-lightGray bg-white fixed left-0 right-0 top-0 pl-2 z-10">
        <h2>Dashboard</h2>
      </header>
      <main className="mt-12">{children}</main>
    </div>
  )
}
