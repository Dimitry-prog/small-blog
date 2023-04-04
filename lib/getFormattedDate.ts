export const getFormattedDate = (date: string): string => {
  const timeFormat: Intl.DateTimeFormatOptions = {
    dateStyle: 'full',
    timeStyle: 'long'
  }
  return new Intl.DateTimeFormat('en-US', timeFormat).format(new Date(date));
}
