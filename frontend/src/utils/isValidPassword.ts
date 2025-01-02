export function isValidPassword(password: string): string[] {
    const errors: string[] = [];

    // Check for minimum length
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.")
    }

    // Check for at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.push("Password must include at least one special character.")
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must include at least one uppercase letter.")
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        errors.push("Password must include at least one lowercase letter.")
    }

    // Check for at least one digit
    if (!/\d/.test(password)) {
        errors.push("Password must include at least one digit.")
    }

    return errors
}