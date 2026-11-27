export default function LoginPage() {
  return (
    <div>
      <h1>Login Manajemen Siswa</h1>
      <form>
        <input
          type="email"
          placeholder="Masukkan email"
        />
        <input
          type="password"
          placeholder="Masukkan password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}