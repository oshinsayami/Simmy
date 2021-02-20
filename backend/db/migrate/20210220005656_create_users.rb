class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email

      t.timestamps
    end
    add_column :carts, :user_id, :integer
    add_column :carts, :checkout, :boolean
  end
end
