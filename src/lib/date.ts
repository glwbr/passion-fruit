/**
 * Formats a date to Brazilian Portuguese locale (pt-BR) format.
 * 
 * @param {string | Date} date - The date to format. Can be a Date object or a valid date string.
 * @returns {string} The formatted date string in the format "day month year" (e.g., "15 janeiro 2024").
 * 
 * @example
 * formatDate('2024-01-15') // Returns: "15 janeiro 2024"
 * formatDate(new Date(2024, 0, 15)) // Returns: "15 janeiro 2024"
 */
export function formatDate(date: string | Date): string {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
  
  /**
   * Formats a date and time to Brazilian Portuguese locale (pt-BR) format.
   * 
   * @param {string | Date} date - The date to format. Can be a Date object or a valid date string.
   * @returns {string} The formatted date and time string in the format "day month year, HH:MM" 
   *                   (e.g., "15 janeiro 2024, 14:30").
   * 
   * @example
   * formatDateTime('2024-01-15T14:30:00') // Returns: "15 janeiro 2024, 14:30"
   * formatDateTime(new Date(2024, 0, 15, 14, 30)) // Returns: "15 janeiro 2024, 14:30"
   */
  export function formatDateTime(date: string | Date): string {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
  
  /**
   * Formats a duration in minutes to a human-readable string.
   * 
   * @param {number} minutes - The duration in minutes to format.
   * @returns {string} The formatted duration string (e.g., "2h 30min", "45min", or "3h").
   * 
   * @example
   * formatDuration(45) // Returns: "45min"
   * formatDuration(120) // Returns: "2h"
   * formatDuration(150) // Returns: "2h 30min"
   */
  export function formatDuration(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours === 0) return `${mins}min`;
    if (mins === 0) return `${hours}h`;
    return `${hours}h ${mins}min`;
  }