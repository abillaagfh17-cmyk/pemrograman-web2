(() => {
  'use strict';

  const keys = {
    assets: 'simaset.assets.v1',
    loans: 'simaset.loans.v1',
    session: 'simaset.session.v1',
    settings: 'simaset.settings.v1',
    draft: 'simaset.assetDraft.v1'
  };
  const routes = {
    dashboard: '/pages/dashboard.html',
    'data-master': '/pages/data-master.html',
    'form-registrasi-aset': '/pages/form.html',
    'laporan-pemeliharaan': '/pages/laporan.html',
    'peminjaman-sirkulasi': '/pages/sirkulasi.html',
    'pengaturan-sistem': '/pages/pengaturan.html',
    login: '/'
  };
  const globalStyles = document.createElement('link');
  globalStyles.rel = 'stylesheet';
  globalStyles.href = new URL('../css/app.css', document.currentScript.src).href;
  document.head.append(globalStyles);
  const money = value => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(Number(value) || 0);
  const read = (key, fallback) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
  };
  const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const text = element => element?.textContent?.replace(/\s+/g, ' ').trim() || '';
  const toValue = value => Number(String(value ?? '').replace(/\D/g, '')) || 0;
  const toast = message => {
    let node = document.getElementById('app-toast');
    if (!node) {
      node = document.createElement('div');
      node.id = 'app-toast';
      node.className = 'fixed bottom-5 right-5 z-[100] rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-xl';
      document.body.append(node);
    }
    node.textContent = message;
    clearTimeout(node.timeoutId);
    node.timeoutId = setTimeout(() => node.remove(), 2600);
  };
  function installResponsiveShell() {
    const sidebar = document.querySelector('aside.fixed');
    const header = document.querySelector('header.fixed');
    if (!sidebar || !header) return;
    const style = document.createElement('style');
    style.textContent = '@media(max-width:767px){body{overflow-x:hidden}.pl-64{padding-left:0!important}header.fixed{left:0!important}aside.fixed{z-index:60;transform:translateX(-100%);transition:transform .2s ease}body.nav-open aside.fixed{transform:translateX(0)}#mobileNavBackdrop{display:none;position:fixed;inset:0;background:rgba(15,23,42,.45);z-index:55}body.nav-open #mobileNavBackdrop{display:block}}@media(min-width:768px){#mobileNavToggle{display:none!important}}';
    document.head.append(style);
    const toggle = document.createElement('button');
    toggle.id = 'mobileNavToggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Buka navigasi');
    toggle.className = 'fixed left-3 top-4 z-50 flex h-9 w-9 items-center justify-center rounded bg-white text-on-surface shadow-sm';
    toggle.innerHTML = '<span class="material-symbols-outlined">menu</span>';
    header.prepend(toggle);
    const backdrop = document.createElement('button');
    backdrop.id = 'mobileNavBackdrop';
    backdrop.type = 'button';
    backdrop.setAttribute('aria-label', 'Tutup navigasi');
    document.body.append(backdrop);
    const close = () => document.body.classList.remove('nav-open');
    toggle.addEventListener('click', () => document.body.classList.toggle('nav-open'));
    backdrop.addEventListener('click', close);
    document.querySelectorAll('aside [data-path]').forEach(link => link.addEventListener('click', close));
  }
  const go = route => { if (routes[route]) location.href = routes[route]; };

  function defaultAssets() {
    return [
      { code: 'AST-ELK-2024-001', nup: '0001/KOM/2024', name: 'PC All-in-One Dell OptiPlex 7490', spec: 'Intel Core i7-10700, RAM 16GB, SSD 512GB NVMe, FHD 23.8 inch', category: 'Elektronik & IT', brand: 'Dell Inc.', location: 'Lab Komputer 02 - Cyber', pic: 'Dr. Irwan H., S.T.', acquired: '2024-01-15', value: 18500000, condition: 'Baik', status: 'Tersedia', source: 'APBN / DIPA' },
      { code: 'AST-ELK-2023-014', nup: '0014/PRO/2023', name: 'Proyektor InFocus IN114xv', spec: '3800 ANSI Lumens, XGA Resolution, Lamp Life 15.000 Jam', category: 'Elektronik & IT', brand: 'InFocus', location: 'Gedung Perkuliahan A - R.304', pic: 'Sri Mulyani, M.Pd', acquired: '2023-08-10', value: 6200000, condition: 'Rusak Ringan', status: 'Perbaikan', source: 'APBN / DIPA' },
      { code: 'AST-MEU-2022-108', nup: '0108/MEU/2022', name: 'Kursi Ergonomis Chitose', spec: 'Kursi kerja dengan sandaran lumbar dan roda', category: 'Meubelair & Perabot', brand: 'Chitose', location: 'Gedung Rektorat - Ruang Dekanat', pic: 'Bambang S.', acquired: '2022-03-12', value: 2450000, condition: 'Baik', status: 'Tersedia', source: 'BLU' },
      { code: 'AST-KND-2021-003', nup: '0003/KND/2021', name: 'Toyota Avanza Veloz Operasional', spec: 'Kendaraan operasional 1.5L, transmisi otomatis', category: 'Kendaraan Dinas', brand: 'Toyota', location: 'Pool Kendaraan Kampus', pic: 'Unit Umum', acquired: '2021-06-20', value: 210000000, condition: 'Baik', status: 'Tersedia', source: 'APBN / DIPA' },
      { code: 'AST-LAB-2023-042', nup: '0042/LAB/2023', name: 'Mikroskop Binokuler Olympus CX23', spec: 'Binokuler, LED illumination, objective 4x-100x', category: 'Mesin & Lab Terpadu', brand: 'Olympus', location: 'Laboratorium Biologi - R.112', pic: 'Dr. Ratna Sari', acquired: '2023-04-05', value: 14800000, condition: 'Baik', status: 'Tersedia', source: 'Hibah' },
      { code: 'AST-ELK-2019-099', nup: '0099/NET/2019', name: 'Server Dell PowerEdge R740', spec: 'Dual Xeon Silver, RAM 128GB, storage RAID', category: 'Elektronik & IT', brand: 'Dell', location: 'Data Center - NOC Lt. 1', pic: 'Tim TIK', acquired: '2019-10-01', value: 92500000, condition: 'Rusak Berat', status: 'Afkir', source: 'APBN / DIPA' }
    ];
  }

  function getAssets() {
    let assets = read(keys.assets, null);
    if (!assets) {
      assets = defaultAssets();
      write(keys.assets, assets);
    }
    return assets;
  }
  function setAssets(assets) { write(keys.assets, assets); }

  function bindNavigation() {
    document.querySelectorAll('[data-path]').forEach(link => {
      const route = link.dataset.path;
      if (routes[route]) link.setAttribute('href', routes[route]);
    });
    document.addEventListener('click', event => {
      const link = event.target.closest('[data-path]');
      if (!link || !routes[link.dataset.path]) return;
      event.preventDefault();
      go(link.dataset.path);
    });
    document.querySelectorAll('a[href="#"]').forEach(link => {
      if (!link.hasAttribute('data-path')) link.addEventListener('click', event => event.preventDefault());
    });
  }

  function bindLogin() {
    const form = document.getElementById('loginForm');
    if (!form) return;
    const admin = document.getElementById('tabAdmin');
    const user = document.getElementById('tabUser');
    let role = 'Petugas / Admin';
    admin?.addEventListener('click', () => { role = 'Petugas / Admin'; });
    user?.addEventListener('click', () => { role = 'Peminjam Lab / Unit'; });
    form.addEventListener('submit', event => {
      event.preventDefault();
      const identifier = document.getElementById('identifierInput')?.value.trim();
      const password = document.getElementById('passwordInput')?.value;
      if (!identifier || !password) { form.reportValidity(); return; }
      const session = { identifier, role, loginAt: new Date().toISOString() };
      if (document.getElementById('rememberSession')?.checked) localStorage.setItem(keys.session, JSON.stringify(session));
      else sessionStorage.setItem(keys.session, JSON.stringify(session));
      go('dashboard');
    }, true);
    document.querySelectorAll('a[href="#reset-password"],a[href="#helpdesk"],a[href="#panduan"]').forEach(link => link.addEventListener('click', event => {
      event.preventDefault();
      toast(link.href.includes('reset') ? 'Hubungi Helpdesk TIK untuk reset kredensial.' : 'Layanan bantuan SIM-ASET: helpdesk@kampus.ac.id');
    }));
    const sso = [...form.querySelectorAll('button')].find(button => button.textContent.includes('Single Sign-On'));
    sso?.addEventListener('click', () => toast('SSO kampus belum dikonfigurasi. Gunakan akun demo untuk melanjutkan.'));
  }

  function renderAssetTable() {
    const table = document.getElementById('assetTable');
    const body = table?.querySelector('tbody');
    if (!body) return;
    const assets = getAssets();
    const search = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const filters = [...document.querySelectorAll('[data-asset-filter]')].map(select => select.value);
    const selected = new Set([...body.querySelectorAll('.row-checkbox:checked')].map(input => input.value));
    const filtered = assets.filter(asset => {
      const haystack = Object.values(asset).join(' ').toLowerCase();
      return haystack.includes(search) && (!filters[0] || asset.category.toLowerCase().includes(filters[0])) && (!filters[1] || asset.location.toLowerCase().includes(filters[1])) && (!filters[2] || asset.condition.toLowerCase().replaceAll(' ', '-') === filters[2]) && (!filters[3] || asset.status.toLowerCase().includes(filters[3]));
    });
    body.innerHTML = filtered.map(asset => {
      const conditionClass = asset.condition === 'Baik' ? 'bg-green-50 text-green-700' : asset.condition === 'Rusak Berat' ? 'bg-red-50 text-red-700' : 'bg-amber-50 text-amber-700';
      const statusClass = asset.status === 'Tersedia' ? 'bg-surface-container text-primary' : asset.status === 'Afkir' ? 'bg-red-50 text-red-700' : 'bg-amber-100 text-amber-800';
      return `<tr class="hover:bg-surface-container-low/60 transition-colors group" data-code="${escapeHtml(asset.code)}">
        <td class="pl-space-lg pr-space-xs py-space-sm text-center"><input class="row-checkbox w-4 h-4 accent-primary" type="checkbox" value="${escapeHtml(asset.code)}" ${selected.has(asset.code) ? 'checked' : ''}></td>
        <td class="px-space-md py-space-sm"><div class="flex items-center gap-space-xs"><span class="bg-surface-container font-code-mono text-code-mono px-space-xs py-space-xxs rounded">${escapeHtml(asset.code)}</span><button class="text-primary p-0.5" data-action="detail" data-code="${escapeHtml(asset.code)}" title="Lihat Barcode & QR"><span class="material-symbols-outlined text-[16px]">qr_code</span></button></div><span class="font-code-mono text-[10px] text-outline block mt-space-xxs">NUP: ${escapeHtml(asset.nup || '-')}</span></td>
        <td class="px-space-md py-space-sm"><div class="font-label-default font-semibold text-on-surface">${escapeHtml(asset.name)}</div><div class="font-body-compact text-on-surface-variant truncate max-w-xs">${escapeHtml(asset.spec || '-')}</div></td>
        <td class="px-space-md py-space-sm"><span class="font-label-compact font-medium">${escapeHtml(asset.category)}</span><span class="font-body-compact text-on-surface-variant block">${escapeHtml(asset.brand || '-')}</span></td>
        <td class="px-space-md py-space-sm"><div class="font-label-compact font-medium">${escapeHtml(asset.location || '-')}</div><span class="font-body-compact text-on-surface-variant block">PJ: ${escapeHtml(asset.pic || '-')}</span></td>
        <td class="px-space-md py-space-sm"><span class="font-label-compact">${escapeHtml(asset.acquired || '-')}</span><span class="font-code-mono text-primary font-semibold block mt-space-xxs">${money(asset.value)}</span></td>
        <td class="px-space-md py-space-sm text-center"><span class="inline-flex px-space-xs py-space-xxs rounded ${conditionClass} font-badge-status">${escapeHtml(asset.condition)}</span></td>
        <td class="px-space-md py-space-sm text-center"><span class="inline-flex px-space-xs py-space-xxs rounded ${statusClass} font-label-compact">${escapeHtml(asset.status)}</span></td>
        <td class="pr-space-lg pl-space-md py-space-sm text-right"><div class="flex items-center justify-end gap-space-xxs"><button class="p-1 text-primary" data-action="detail" data-code="${escapeHtml(asset.code)}" title="Lihat Detail"><span class="material-symbols-outlined text-[18px]">visibility</span></button><button class="p-1 text-tertiary" data-action="edit" data-code="${escapeHtml(asset.code)}" title="Ubah Data"><span class="material-symbols-outlined text-[18px]">edit</span></button><button class="p-1" data-action="print" data-code="${escapeHtml(asset.code)}" title="Cetak Label Langsung"><span class="material-symbols-outlined text-[18px]">print</span></button><button class="p-1 text-error" data-action="delete" data-code="${escapeHtml(asset.code)}" title="Hapus Aset"><span class="material-symbols-outlined text-[18px]">delete</span></button></div></td>
      </tr>`;
    }).join('') || '<tr><td colspan="9" class="p-8 text-center text-on-surface-variant">Tidak ada aset yang cocok dengan pencarian.</td></tr>';
    const selectAll = document.getElementById('selectAllCheckbox');
    if (selectAll) selectAll.checked = filtered.length > 0 && filtered.every(asset => selected.has(asset.code));
    const count = document.getElementById('selectedCountText');
    if (count) count.textContent = `${selected.size} Aset Terpilih`;
    const banner = document.getElementById('batchActionBanner');
    banner?.classList.toggle('hidden', selected.size === 0);
    updateMasterStats(assets);
  }

  function updateMasterStats(assets) {
    const values = [assets.length, assets.filter(item => item.condition === 'Baik').length, assets.filter(item => item.condition !== 'Baik').length];
    const candidates = [...document.querySelectorAll('.font-display-kpi')];
    candidates.slice(0, 3).forEach((element, index) => { element.textContent = values[index].toLocaleString('id-ID'); });
  }

  function csvDownload(filename, rows) {
    const csv = rows.map(row => row.map(value => `"${String(value ?? '').replaceAll('"', '""')}"`).join(',')).join('\r\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  function printLabels(assets) {
    if (!assets.length) { toast('Pilih minimal satu aset untuk mencetak label.'); return; }
    const page = window.open('', '_blank');
    if (!page) { toast('Izinkan pop-up browser untuk mencetak label.'); return; }
    page.document.write(`<html><head><title>Label SIM-ASET</title><style>body{font-family:Arial,sans-serif;display:grid;grid-template-columns:repeat(2,80mm);gap:4mm;padding:8mm}.label{border:1px solid #64748b;padding:5mm;min-height:30mm;display:flex;align-items:center;justify-content:space-between}.code{font-weight:bold;color:#004ac6}.qr{font-size:42px;border:3px solid #0b1c30;padding:3px}@media print{body{padding:0}}</style></head><body>${assets.map(asset => `<article class="label"><div><small>INVENTARIS SARPRAS KAMPUS</small><div class="code">${escapeHtml(asset.code)}</div><strong>${escapeHtml(asset.name)}</strong><div>${escapeHtml(asset.location)}</div></div><div class="qr">▦</div></article>`).join('')}</body></html>`);
    page.document.close();
    page.focus();
    page.print();
  }

  let deleteCode = null;
  function bindMaster() {
    const table = document.getElementById('assetTable');
    if (!table) return;
    const selects = [...document.querySelectorAll('.bg-surface-container-lowest select')].slice(0, 4);
    selects.forEach(select => { select.dataset.assetFilter = 'true'; });
    document.getElementById('searchInput')?.addEventListener('input', renderAssetTable);
    selects.forEach(select => select.addEventListener('change', renderAssetTable));
    const reset = [...document.querySelectorAll('button')].find(button => text(button).includes('Reset Filter'));
    reset?.addEventListener('click', () => { document.getElementById('searchInput').value = ''; selects.forEach(select => select.selectedIndex = 0); renderAssetTable(); });
    document.getElementById('selectAllCheckbox')?.addEventListener('change', event => {
      table.querySelectorAll('.row-checkbox').forEach(box => { box.checked = event.target.checked; });
      renderAssetTable();
    });
    table.addEventListener('change', event => { if (event.target.matches('.row-checkbox')) renderAssetTable(); });
    table.addEventListener('click', event => {
      const button = event.target.closest('[data-action]');
      if (!button) return;
      const assets = getAssets();
      const asset = assets.find(item => item.code === button.dataset.code);
      if (!asset) return;
      if (button.dataset.action === 'detail') {
        document.getElementById('modalAssetTitle').textContent = asset.name;
        document.getElementById('modalBarcodeTag').textContent = asset.code;
        const modal = document.getElementById('detailModal');
        modal?.classList.remove('hidden');
      } else if (button.dataset.action === 'delete') {
        deleteCode = asset.code;
        document.getElementById('deleteTargetName').textContent = asset.name;
        document.getElementById('deleteModal')?.classList.remove('hidden');
      } else if (button.dataset.action === 'edit') {
        const name = prompt('Nama aset:', asset.name);
        if (name === null || !name.trim()) return;
        const location = prompt('Lokasi aset:', asset.location);
        if (location === null) return;
        asset.name = name.trim();
        asset.location = location.trim();
        setAssets(assets);
        renderAssetTable();
        toast('Data aset berhasil diperbarui.');
      } else if (button.dataset.action === 'print') printLabels([asset]);
    });
    document.getElementById('confirm-delete-btn')?.addEventListener('click', () => deleteAssets(deleteCode ? [deleteCode] : selectedCodes()));
    window.confirmDelete = () => deleteAssets(deleteCode ? [deleteCode] : selectedCodes());
    window.closeDeleteModal = () => document.getElementById('deleteModal')?.classList.add('hidden');
    window.closeDetailModal = () => document.getElementById('detailModal')?.classList.add('hidden');
    const exportButton = [...document.querySelectorAll('button')].find(button => text(button).includes('Export Excel'));
    exportButton?.addEventListener('click', () => {
      const assets = getAssets();
      csvDownload('data-aset-simaset.csv', [['Kode', 'NUP', 'Nama', 'Spesifikasi', 'Kategori', 'Merk', 'Lokasi', 'PIC', 'Tanggal Perolehan', 'Nilai', 'Kondisi', 'Status'], ...assets.map(item => [item.code, item.nup, item.name, item.spec, item.category, item.brand, item.location, item.pic, item.acquired, item.value, item.condition, item.status])]);
    });
    [...document.querySelectorAll('button')].filter(button => text(button).includes('Cetak Label Barcode/QR')).forEach(button => button.addEventListener('click', () => printLabels(getAssets())));
    [...document.querySelectorAll('#batchActionBanner button')].forEach(button => button.addEventListener('click', () => {
      if (text(button).includes('Cetak QR')) printLabels(getAssets().filter(item => selectedCodes().includes(item.code)));
      if (text(button).includes('Pindahkan')) {
        const destination = prompt('Lokasi tujuan aset terpilih:');
        if (!destination) return;
        const selected = selectedCodes();
        const assets = getAssets().map(item => selected.includes(item.code) ? { ...item, location: destination } : item);
        setAssets(assets); renderAssetTable(); toast('Lokasi aset terpilih berhasil diperbarui.');
      }
      if (text(button).includes('Hapus Massal')) { deleteCode = null; document.getElementById('deleteTargetName').textContent = `${selectedCodes().length} aset terpilih`; document.getElementById('deleteModal')?.classList.remove('hidden'); }
    }));
    renderAssetTable();
  }
  function selectedCodes() { return [...document.querySelectorAll('#assetTable .row-checkbox:checked')].map(box => box.value); }
  function deleteAssets(codes) {
    if (!codes.length) return;
    setAssets(getAssets().filter(item => !codes.includes(item.code)));
    window.closeDeleteModal?.();
    deleteCode = null;
    renderAssetTable();
    toast('Aset berhasil dihapus dari data lokal.');
  }

  function bindForm() {
    const name = document.getElementById('nama-aset-input');
    if (!name) return;
    const code = document.getElementById('kode-aset-input');
    const fields = ['nama-aset-input', 'kategori-select', 'merk-tipe-input', 'serial-number-input', 'spesifikasi-textarea', 'gedung-select', 'ruangan-select', 'pic-select', 'tgl-perolehan-input', 'harga-perolehan-input', 'nilai-residu-input', 'masa-manfaat-select'];
    const draft = read(keys.draft, null);
    if (draft) fields.forEach(id => { const field = document.getElementById(id); if (field && draft[id] !== undefined) field.value = draft[id]; });
    document.getElementById('refresh-code-btn')?.addEventListener('click', () => { if (code) code.value = `AST-${new Date().getFullYear()}-${String(Date.now()).slice(-4)}`; });
    fields.forEach(id => document.getElementById(id)?.addEventListener('input', saveDraft));
    fields.forEach(id => document.getElementById(id)?.addEventListener('change', saveDraft));
    function saveDraft() { write(keys.draft, Object.fromEntries(fields.map(id => [id, document.getElementById(id)?.value || '']))); }
    document.getElementById('btn-draft')?.addEventListener('click', () => { saveDraft(); toast('Draf registrasi tersimpan di perangkat ini.'); });
    const cancel = [...document.querySelectorAll('footer button')].find(button => text(button).trim() === 'Batal');
    cancel?.addEventListener('click', () => { if (confirm('Batalkan pengisian dan kembali ke data master?')) go('data-master'); });
    const inputs = document.querySelectorAll('input[type="file"]');
    let fileInput = inputs[0];
    const dropzone = [...document.querySelectorAll('div')].find(node => node.className.includes('border-dashed') && node.textContent.includes('Tarik'));
    if (dropzone && !fileInput) {
      fileInput = document.createElement('input');
      fileInput.type = 'file'; fileInput.multiple = true; fileInput.accept = 'image/*,.pdf'; fileInput.hidden = true;
      dropzone.append(fileInput);
      const buttons = dropzone.querySelectorAll('button');
      buttons[0]?.addEventListener('click', () => fileInput.click());
      buttons[1]?.addEventListener('click', () => { fileInput.accept = 'image/*'; fileInput.capture = 'environment'; fileInput.click(); });
      fileInput.addEventListener('change', () => {
        const tooLarge = [...fileInput.files].find(file => file.size > 5 * 1024 * 1024);
        if (tooLarge) { alert(`${tooLarge.name} melebihi batas 5 MB.`); fileInput.value = ''; return; }
        if (fileInput.files.length) toast(`${fileInput.files.length} berkas siap dilampirkan (tersimpan selama sesi browser).`);
      });
      dropzone.addEventListener('dragover', event => { event.preventDefault(); dropzone.classList.add('ring-2', 'ring-primary'); });
      dropzone.addEventListener('dragleave', () => dropzone.classList.remove('ring-2', 'ring-primary'));
      dropzone.addEventListener('drop', event => { event.preventDefault(); dropzone.classList.remove('ring-2', 'ring-primary'); if (event.dataTransfer.files.length) toast(`${event.dataTransfer.files.length} berkas diterima.`); });
    }
    const submit = document.getElementById('btn-submit');
    submit?.addEventListener('click', event => {
      event.preventDefault();
      const required = ['nama-aset-input', 'serial-number-input', 'tgl-perolehan-input', 'harga-perolehan-input'];
      const missing = required.find(id => !document.getElementById(id)?.value.trim());
      if (missing) { document.getElementById(missing).focus(); alert('Lengkapi nama aset, nomor seri, tanggal perolehan, dan harga perolehan.'); return; }
      const category = document.getElementById('kategori-select');
      const location = document.getElementById('gedung-select');
      const room = document.getElementById('ruangan-select');
      const pic = document.getElementById('pic-select');
      const amount = toValue(document.getElementById('harga-perolehan-input').value);
      const item = {
        code: code.value, nup: code.value.split('-').at(-1), name: name.value.trim(), spec: document.getElementById('spesifikasi-textarea').value.trim(),
        category: category.options[category.selectedIndex].text.split(' (')[0], brand: document.getElementById('merk-tipe-input').value.trim() || '-',
        location: `${location.value} - ${room.value}`, pic: pic.value, acquired: document.getElementById('tgl-perolehan-input').value,
        value: amount, condition: 'Baik', status: 'Tersedia', source: document.querySelector('[name="asal_perolehan"]:checked')?.value || 'APBN / DIPA', serial: document.getElementById('serial-number-input').value.trim()
      };
      const assets = getAssets();
      if (assets.some(asset => asset.code === item.code)) item.code = `AST-${new Date().getFullYear()}-${String(Date.now()).slice(-4)}`;
      setAssets([item, ...assets]);
      localStorage.removeItem(keys.draft);
      toast(`Aset ${item.code} berhasil didaftarkan.`);
      setTimeout(() => go('data-master'), 800);
    });
    document.querySelectorAll('.grid.grid-cols-2.lg\\:grid-cols-4 button').forEach((button, index) => button.addEventListener('click', () => {
      const sections = [...document.querySelectorAll('section.px-space-xl.pb-space-2xl .lg\\:col-span-8 > div')];
      sections[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));
    document.querySelectorAll('input,select').forEach(field => field.addEventListener('input', () => {
      const price = toValue(document.getElementById('harga-perolehan-input')?.value);
      const residual = toValue(document.getElementById('nilai-residu-input')?.value);
      const years = Number(document.getElementById('masa-manfaat-select')?.value) || 1;
      const output = document.getElementById('depresiasi-tahunan-val');
      if (output) output.textContent = money(Math.max(0, (price - residual) / years));
    }));
    document.querySelectorAll('button').forEach(button => {
      if (text(button).includes('Uji Cetak Sample')) button.addEventListener('click', () => window.print());
      if (button.title === 'Download QR PNG') button.addEventListener('click', () => toast('QR label siap dicetak dari menu cetak browser.'));
    });
  }

  function bindDashboard() {
    const sync = document.getElementById('btn-sync-telemetry');
    sync?.addEventListener('click', () => {
      const icon = sync.querySelector('.material-symbols-outlined');
      icon?.classList.add('animate-spin');
      setTimeout(() => { icon?.classList.remove('animate-spin'); toast('Data lokal berhasil disinkronkan.'); }, 700);
    });
    document.getElementById('btn-export-pdf')?.addEventListener('click', () => window.print());
    document.querySelectorAll('button').forEach(button => {
      if (text(button).includes('Jadwalkan Servis')) button.addEventListener('click', () => {
        const title = button.closest('.p-space-sm')?.querySelector('h3')?.textContent || 'Aset';
        const logs = read('simaset.maintenance.v1', []);
        logs.unshift({ ticket: `SRV-${Date.now().toString().slice(-6)}`, asset: title, status: 'Terjadwal', date: new Date().toISOString().slice(0, 10), cost: 0, vendor: 'Belum ditentukan' });
        write('simaset.maintenance.v1', logs);
        toast(`Jadwal servis untuk ${title} dicatat.`);
      });
    });
  }

  function bindReports() {
    const table = document.querySelector('table');
    if (!table || !document.body.textContent.includes('Log & Riwayat Pengerjaan')) return;
    const maintenance = read('simaset.maintenance.v1', []);
    maintenance.forEach(log => {
      const row = document.createElement('tr');
      row.className = 'hover:bg-surface-container-low/60 transition-colors';
      row.innerHTML = `<td class="py-space-md px-space-md"><span class="font-code-mono text-primary font-bold">${escapeHtml(log.ticket)}</span></td><td class="py-space-md px-space-md">${escapeHtml(log.date)}</td><td class="py-space-md px-space-md"><strong>${escapeHtml(log.asset)}</strong></td><td class="py-space-md px-space-md">Pemeliharaan terjadwal</td><td class="py-space-md px-space-md">${escapeHtml(log.vendor)}</td><td class="py-space-md px-space-md text-right">${money(log.cost)}</td><td class="py-space-md px-space-md text-center">${escapeHtml(log.status)}</td><td class="py-space-md px-space-md text-center">Belum tersedia</td>`;
      table.querySelector('tbody')?.prepend(row);
    });
    const exportButtons = [...document.querySelectorAll('button')].filter(button => /Export CSV|Export PDF/.test(text(button)));
    exportButtons.forEach(button => button.addEventListener('click', () => {
      if (text(button).includes('PDF')) { window.print(); return; }
      const rows = [...table.querySelectorAll('tr')].map(row => [...row.cells].map(cell => text(cell)));
      csvDownload('laporan-pemeliharaan-simaset.csv', rows);
    }));
    const selects = [...document.querySelectorAll('select')];
    selects.forEach(select => select.addEventListener('change', () => {
      const value = select.value.toLowerCase();
      table.querySelectorAll('tbody tr').forEach(row => { row.hidden = value !== 'all' && value !== '' && !text(row).toLowerCase().includes(value); });
    }));
    const reset = [...document.querySelectorAll('button')].find(button => text(button).includes('Reset Filter'));
    reset?.addEventListener('click', () => { selects.forEach(select => select.selectedIndex = 0); table.querySelectorAll('tbody tr').forEach(row => row.hidden = false); });
    table.querySelectorAll('a[href="#"]').forEach(link => link.addEventListener('click', event => { event.preventDefault(); toast(`Dokumen ${text(link)} belum memiliki berkas digital.`); }));
  }

  function bindLoans() {
    const body = document.getElementById('loanRows');
    if (!body) return;
    let loans = read(keys.loans, [
      { id: 'PJM-2026-001', asset: 'Laptop Dell Latitude 5440', borrower: 'BEM Fakultas Teknik', start: '2026-10-08', due: '2026-10-12', status: 'Dipinjam' },
      { id: 'PJM-2026-002', asset: 'Proyektor Epson EB-2250U', borrower: 'Lab Multimedia', start: '2026-10-09', due: '2026-10-11', status: 'Dipinjam' }
    ]);
    write(keys.loans, loans);
    const assetSelect = document.getElementById('loanAsset');
    function refreshAssetOptions() {
      if (!assetSelect) return;
      assetSelect.innerHTML = getAssets().filter(asset => asset.status === 'Tersedia').map(asset => `<option value="${escapeHtml(asset.code)}">${escapeHtml(asset.name)}</option>`).join('') || '<option value="">Tidak ada aset tersedia</option>';
    }
    function render() {
      refreshAssetOptions();
      body.innerHTML = loans.map(loan => `<tr><td>${escapeHtml(loan.id)}</td><td>${escapeHtml(loan.asset)}</td><td>${escapeHtml(loan.borrower)}</td><td>${escapeHtml(loan.start)}</td><td>${escapeHtml(loan.due)}</td><td><span class="badge ${loan.status === 'Dipinjam' ? 'warning' : 'success'}">${escapeHtml(loan.status)}</span></td><td>${loan.status === 'Dipinjam' ? `<button class="action" data-return="${escapeHtml(loan.id)}">Tandai Kembali</button>` : 'Selesai'}</td></tr>`).join('') || '<tr><td colspan="7">Belum ada transaksi peminjaman.</td></tr>';
      document.getElementById('loanCount').textContent = loans.filter(loan => loan.status === 'Dipinjam').length;
    }
    document.getElementById('loanForm')?.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const borrower = String(data.get('borrower') || '').trim();
      if (!borrower || !assetSelect.value) return;
      const assets = getAssets();
      const asset = assets.find(item => item.code === assetSelect.value);
      if (!asset || asset.status !== 'Tersedia') { toast('Aset tidak lagi tersedia. Muat ulang pilihan aset.'); render(); return; }
      loans.unshift({ id: `PJM-${new Date().getFullYear()}-${String(Date.now()).slice(-4)}`, asset: asset.name, assetCode: asset.code, borrower, start: new Date().toISOString().slice(0, 10), due: data.get('due'), status: 'Dipinjam' });
      asset.status = 'Dipinjam';
      setAssets(assets);
      write(keys.loans, loans); event.currentTarget.reset(); render(); toast('Peminjaman berhasil dicatat.');
    });
    body.addEventListener('click', event => {
      const button = event.target.closest('[data-return]');
      if (!button) return;
      const loan = loans.find(item => item.id === button.dataset.return);
      loans = loans.map(item => item.id === button.dataset.return ? { ...item, status: 'Dikembalikan' } : item);
      if (loan?.assetCode) {
        const assets = getAssets().map(asset => asset.code === loan.assetCode ? { ...asset, status: 'Tersedia' } : asset);
        setAssets(assets);
      }
      write(keys.loans, loans); render(); toast('Pengembalian aset sudah dicatat.');
    });
    render();
  }

  function bindSettings() {
    const form = document.getElementById('settingsForm');
    if (!form) return;
    const saved = read(keys.settings, {});
    form.querySelectorAll('[name]').forEach(input => {
      if (saved[input.name] !== undefined) input.type === 'checkbox' ? input.checked = saved[input.name] : input.value = saved[input.name];
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      write(keys.settings, Object.fromEntries([...form.querySelectorAll('[name]')].map(input => [input.name, input.type === 'checkbox' ? input.checked : input.value])));
      toast('Pengaturan berhasil disimpan di perangkat ini.');
    });
    document.getElementById('logoutButton')?.addEventListener('click', () => {
      localStorage.removeItem(keys.session); sessionStorage.removeItem(keys.session); go('login');
    });
    document.getElementById('resetDataButton')?.addEventListener('click', () => {
      if (!confirm('Hapus seluruh data demo yang tersimpan di perangkat ini?')) return;
      Object.values(keys).forEach(key => localStorage.removeItem(key));
      localStorage.removeItem('simaset.maintenance.v1');
      toast('Data lokal dihapus. Halaman akan dimuat ulang.');
      setTimeout(() => location.reload(), 700);
    });
  }

  installResponsiveShell();
  bindNavigation();
  bindLogin();
  bindMaster();
  bindForm();
  bindDashboard();
  bindReports();
  bindLoans();
  bindSettings();
})();
