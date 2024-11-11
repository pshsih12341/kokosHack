export function formatTimeToMoscow(date: Date): string {
	return date.toLocaleTimeString("ru-RU", {
		timeZone: "Europe/Moscow",
		hour: "2-digit",
		minute: "2-digit",
	});
}
export function formatDateToMoscowNumeric(date: Date): string {
	return date.toLocaleDateString("ru-RU", {
		timeZone: "Europe/Moscow",
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});
}
