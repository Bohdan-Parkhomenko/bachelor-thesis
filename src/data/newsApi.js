// Базова URL-адреса для запитів до API
const API_URL = "http://localhost:5000/api/news";

/**
 * Отримати всі новини
 * @returns {Promise<Array>} Масив новин з бази даних
 */
export async function fetchNews() {
    const response = await fetch(API_URL);
    return await response.json();
}

/**
 * Отримати одну новину за її ID
 * @param {string} id - ID новини (MongoDB ObjectId)
 * @returns {Promise<Object>} Об'єкт новини
 */
export async function fetchNewsById(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return await response.json();
}

/**
 * Створити нову новину
 * @param {Object} newsData - Об'єкт новини, що містить title, content тощо
 * @returns {Promise<Object>} Результат створення новини (наприклад, insertedId)
 */
export async function createNews(newsData) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newsData), // Перетворюємо JS-об'єкт у JSON
    });
    return await response.json();
}

/**
 * Оновити існуючу новину за ID
 * @param {string} id - ID новини, яку потрібно оновити
 * @param {Object} updatedData - Об'єкт з оновленими полями новини
 * @returns {Promise<Object>} Результат оновлення
 */
export async function updateNews(id, updatedData) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
    });
    return await response.json();
}

/**
 * Видалити новину за ID
 * @param {string} id - ID новини, яку потрібно видалити
 * @returns {Promise<Object>} Результат видалення
 */
export async function deleteNews(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
    return await response.json();
}
