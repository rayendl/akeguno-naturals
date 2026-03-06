export function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
    return classes.filter(Boolean).join(" ");
}
