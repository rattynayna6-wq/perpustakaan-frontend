import AppHeader from '../components/AppHeader.js';

// Halaman Data Buku (placeholder, CRUD dibuat minggu ke-12)
export default {
    name: 'BukuView',
    components: { AppHeader },

    template: `
        <div class="dashboard-page">
            <AppHeader />
            <main class="content">
                <h1>Data Buku</h1>
                <p class="welcome">Halaman pengelolaan data buku.</p>

                <section class="panel">
                    <h2>Daftar Buku</h2>
                    <p>Fitur CRUD buku akan dibuat pada pertemuan minggu ke-12.</p>
                    <p>Integrasi data Laravel API akan dipelajari pada minggu ke-10.</p>
                </section>
            </main>
        </div>
    `
};
