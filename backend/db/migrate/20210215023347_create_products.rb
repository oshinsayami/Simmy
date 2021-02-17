class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.float :price
      t.string :image
      t.string :product_official_link
      t.string :category
      t.string :color
      t.string :brand
      t.integer :category_id

      t.timestamps
    end
  end
end
