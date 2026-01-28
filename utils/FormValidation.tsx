// Validates a fullName input field.
// Checks the length, presence of space character
// and presence of only letters.
// Throws an error if any of these tests fail.
// Return nothing otherwise.
export function validateName(fullName: string) {
    const trimmed:string = fullName.trim()
    if (trimmed.length < 3 || trimmed.length > 30) {
        throw new Error("Full name must be between 3-30 characters")
    }
    const nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/
    if (!nameRegex.test(trimmed)) {
        throw new Error("Full name must contain a single space symbol")
    }
    return
}

// Validates an email input field.
// Checks the length and email format.
// Throws an error if any of these tests fail.
// Return nothing otherwise.
export function validateEmail(email: string) {
    const trimmed:string = email.trim()
    if (trimmed.length < 3 || trimmed.length > 30) {
        throw new Error("Email must be between 3-30 characters")
    }
    const emailRegex = /^[a-zA-Z0-9/./_]+@+[a-zA-Z0-9\.\-]+\.+[a-z]{2,}$/
    if (!emailRegex.test(trimmed)) {
        throw new Error("Email must follow the following format: username@emailprovider.domain")
    }
    return
}

// Validates the subject of an email.
// Checks the length and type of characters.
// Throws an error if any of these tests fail.
// Return nothing otherwise.
export function validateSubject(subject: string) {
    const trimmed:string = subject.trim()
    if (trimmed.length < 3 || trimmed.length > 30) {
        throw new Error("Subject must be between 3-40 characters")
    }
    const subjectRegex = /^[\w\s!%$&.,:;?()\-#"]+$/
    if (!subjectRegex.test(trimmed)) {
        throw new Error("Subject can only contain letters, digits and the special characters !%$&")
    }
    return
}

// Validates the message input field.
// Checks on characters and length
// Throws an error if any of these tests fail.
// Returns noting otherwise.
export function validateMessage(message: string) {
    const trimmed: string = message.trim()
    if (trimmed.length < 50 || trimmed.length > 2000) {
        throw new Error("Message can only be between 50-750 characters")
    }
    const messageRegex = /^[^<>{}\[\]]+$/
    if (!messageRegex.test(trimmed)) {
        throw new Error("Message must not contain the following symbols: <>{}[]")
    }
    return
}