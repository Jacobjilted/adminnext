import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a category</option>
          <option value="kitchen">Kitchen</option>
          <option value="Phone">Phone</option>
          <option value="Computer">Computer</option>
          <option value="Laptop">Laptop</option>
        </select>
        <input type="number" name="price" placeholder="price" />
        <input type="number" name="stock" placeholder="stock" />
        <input type="text" name="color" placeholder="color" />
        <input type="text" name="size" placeholder="size" />
        <textarea name="desc" id="desc" rows="16" placeholder="desc">
          Description
        </textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
