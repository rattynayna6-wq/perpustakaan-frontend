import AppHeader from '../components/AppHeader.js';

// Halaman Data Anggota (tugas tambahan) - data dummy ditampilkan dengan v-for
export default {
    name: 'AnggotaView',
    components: { AppHeader },

    data() {
        return {
            anggota: [
                { id: 1, nama: 'Ayu Lestari',  email: 'ayu@mail.com',  status: 'Aktif' },
                { id: 2, nama: 'Budi Santoso', email: 'budi@mail.com', status: 'Aktif' },
                { id: 3, nama: 'Citra Dewi',   email: 'citra@mail.com', status: 'Nonaktif' },
                { id: 4, nama: 'Dimas Pratama', email: 'dimas@mail.com', status: 'Aktif' }
            ]
        };
    },

    template: `
        <div class="dashboard-page">
            <AppHeader />
            <main class="content">
                <h1>Data Anggota</h1>
                <p class="welcome">Daftar anggota perpustakaan (data dummy).</p>

                <section class="panel">
                    <h2>Daftar Anggota</h2>
                    <div class="table-wrap">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(a, index) in anggota" :key="a.id">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ a.nama }}</td>
                                    <td>{{ a.email }}</td>
                                    <td>{{ a.status }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="note">Data diambil dari Laravel API pada minggu ke-10.</p>
                </section>
            </main>
        </div>
    `
};
