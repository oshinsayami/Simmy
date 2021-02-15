class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.integer :quantity
      t.float :total
      t.integer :product_id

      t.timestamps
    end
  end
end