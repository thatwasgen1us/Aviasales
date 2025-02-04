export const time = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  const minute = minutes - (hours * 60)
  if (minute < 10) {
    return `${hours % 24}:0${minute}`
  }
  return `${hours % 24}:${minute}`
}

export const dateToTime = (date: string, duration: number) => {
  const timeString = date.substring(11, 16)
  const [hours, minutes] = timeString.split(':');
  const totalMinutes = parseInt(hours, 10) * 60 + parseInt(minutes, 10);
  const lastTime = totalMinutes + duration
  return `${timeString} - ${time(lastTime)}`
}