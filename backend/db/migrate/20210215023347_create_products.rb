class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.float :price
      t.string :image
      t.string :product_official_link
      t.string :product_type
      t.string :color
      t.string :brand

      t.timestamps
    end
  end
end
