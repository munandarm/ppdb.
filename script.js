// script.js
const data = {
  TKJ: {
    title: "Teknik Komputer dan Jaringan (TKJ)",
    content: `
      <p>TKJ mempelajari tentang instalasi jaringan komputer, mikrotik, sistem operasi server, dan troubleshooting perangkat keras.</p>
      <p><strong>Peluang kerja:</strong> Teknisi jaringan, IT support, administrator server, teknisi komputer, installer jaringan ISP.</p>
    `
  },
  RPL: {
    title: "Rekayasa Perangkat Lunak (RPL)",
    content: `
      <p>RPL fokus pada pembuatan aplikasi desktop, web, dan mobile. Mahasiswa belajar bahasa pemrograman, UI/UX, dan testing software.</p>
      <p><strong>Peluang kerja:</strong> Programmer, web developer, mobile developer, QA tester, software engineer.</p>
      <a href="https://munandarm.github.io/gamee/" target="_blank">Game Edukasi Buatan Siswa</a>.
    `
  },
  PKM: {
    title: "Perbankan dan Keuangan Makro (PKM)",
    content: `
      <p>PKM mengajarkan dasar-dasar perbankan, akuntansi, keuangan perusahaan, dan perpajakan.</p>
      <p><strong>Peluang kerja:</strong> Teller, staf keuangan, analis keuangan, pegawai administrasi bank.</p>
    `
  },
  OTKP: {
    title: "Otomatisasi dan Tata Kelola Perkantoran (OTKP)",
    content: `
      <p>Jurusan ini mempersiapkan siswa menjadi staf administrasi andal yang menguasai pengelolaan dokumen dan teknologi perkantoran.</p>
      <p><strong>Peluang kerja:</strong> Sekretaris, staf administrasi, operator entri data, customer service.</p>
    `
  },
  MM: {
    title: "Multimedia (MM)",
    content: `
      <p>Multimedia fokus pada desain grafis, animasi, video editing, fotografi, dan pembuatan konten digital.</p>
      <p><strong>Peluang kerja:</strong> Content creator, desainer grafis, editor video, animator, fotografer.</p>
    `
  }
};

document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('click', () => {
    const skill = card.getAttribute('data-skill');
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    const dataItem = data[skill];
    if (dataItem) {
      body.innerHTML = `<h3>${dataItem.title}</h3>${dataItem.content}`;
      modal.style.display = 'flex';
    }
  });
});

document.querySelector('.close-button').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});
