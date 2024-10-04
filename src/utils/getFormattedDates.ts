export default function getFormattedDates() {
  const today = new Date();
  const oneMonthAgo = new Date(today);
  oneMonthAgo.setMonth(today.getMonth() - 1);
  const oneMonthLater = new Date(today);
  oneMonthLater.setMonth(today.getMonth() + 1);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };

  return {
    oneMonthAgo: formatDate(oneMonthAgo),
    today: formatDate(today),
    oneMonthLater: formatDate(oneMonthLater),
  };
}
