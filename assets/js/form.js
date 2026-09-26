document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#loanForm');
  const bookIdField = document.querySelector('#bookId');
  const memberIdField = document.querySelector('#memberId');
  const loanDays = document.querySelector('#loanDays');
  const dueDateField = document.querySelector('#dueDate');
  const feeField = document.querySelector('#dendaValue');

  if (loanDays && dueDateField) {
    const today = new Date();
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + Number(loanDays.value || 7));

    dueDateField.value = nextDate.toISOString().split('T')[0];

    loanDays.addEventListener('input', () => {
      const value = Number(loanDays.value || 7);
      const target = new Date();
      target.setDate(target.getDate() + value);
      dueDateField.value = target.toISOString().split('T')[0];
    });
  }

  if (feeField && loanDays) {
    const feeValue = Number(loanDays.value || 7) * 2500;
    feeField.textContent = `Rp ${feeValue.toLocaleString('id-ID')}`;

    loanDays.addEventListener('input', () => {
      const value = Number(loanDays.value || 7) * 2500;
      feeField.textContent = `Rp ${value.toLocaleString('id-ID')}`;
    });
  }

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = document.querySelector('#formStatus');
      const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
      let valid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#ef4444';
        } else {
          field.style.borderColor = '#e2e8f0';
        }
      });

      if (!valid) {
        if (status) {
          status.textContent = 'Harap lengkapi semua field yang wajib diisi.';
          status.style.color = '#b91c1c';
        }
        return;
      }

      if (status) {
        status.textContent = 'Transaksi peminjaman berhasil disimpan.';
        status.style.color = '#15803d';
      }
      form.reset();
      if (loanDays && dueDateField) {
        dueDateField.value = '';
      }
    });
  }
});
