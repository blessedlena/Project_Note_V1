export function formatDate(date) {
    return date.toLocalDeateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",    
    });
}; 