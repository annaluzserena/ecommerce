export default function NewProductRoute() {
    return (
        <div>
            <h2>Add a new product</h2>
            <form method="post">
                <label htmlFor="product">Product:</label>
                <input type="text" name="product" required />

                <label htmlFor="img">Image:</label>
                <input type="file" name="img" accept="image/*" required />

                <label htmlFor="description">Description:</label>
                <input type="textarea" name="description" required />

                <label htmlFor="price">Price:</label>
                <input type="number" name="price" required />

                <button type="submit">Save</button>
            </form>
        </div>
    );
};