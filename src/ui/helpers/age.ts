export const age = (date: Date | string | any[]) => {
  if (Array.isArray(date) && date.length === 1 && date[0] === undefined) {
    return NaN;
  }

  let dateString: string;

  if (Array.isArray(date) && date.length > 0) {
    dateString = typeof date[0] === 'string' ? date[0] : date[0].toISOString();
  } else if (date instanceof Date) {
    dateString = date.toISOString();
  } else if (typeof date === 'string') {
    dateString = date;
  } else {
    console.error('Tipo de data inválido:', date);
    return NaN;
  }

  dateString = typeof dateString === 'string' ? dateString.split('T')[0].split(' ')[0] : '';

  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    console.error('Formato de data inválido:', dateString);
    return NaN;
  }

  const [year, month, day] = dateString.split("-").map(Number);
  const birthDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();
  const dayDiff = currentDate.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age -= 1;
  }

  return age;
}