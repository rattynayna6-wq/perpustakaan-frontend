import AppHeader from '../components/AppHeader.js';

// Halaman Dashboard (data dummy, nanti diganti data Laravel API)
export default {
    name: 'DashboardView',
    components: { AppHeader },

    data() {
        return {
            totalBuku: 120,
            totalAnggota: 85,
            totalPeminjaman: 24,
            totalPengembalian: 15
        };
    },

    template: `
        <div class="dashboard-page">
            <AppHeader />
            <main class="content">
                <h1>Dashboard Admin</h1>
                <p class="welcome">Selamat datang di Aplikasi Perpustakaan Digital.</p>

                <div class="stat-grid">
                    <div class="stat-card">
                        <h3>Total Buku</h3>
                        <h2>{{ totalBuku }}</h2>
                    </div>
                    <div class="stat-card">
                        <h3>Total Anggota</h3>
                        <h2>{{ totalAnggota }}</h2>
                    </div>
                    <div class="stat-card">
                        <h3>Peminjaman</h3>
                        <h2>{{ totalPeminjaman }}</h2>
                    </div>
                    <div class="stat-card">
                        <h3>Pengembalian</h3>
                        <h2>{{ totalPengembalian }}</h2>
                    </div>
                </div>

                <section class="panel">
                    <h2>Informasi Aplikasi</h2>
                    <p>Sistem Informasi Perpustakaan Digital berbasis Web.</p>
                    <p>Frontend menggunakan Vue.js 3 dan Backend menggunakan Laravel.</p>
                </section>
            </main>
        </div>
    `
};
