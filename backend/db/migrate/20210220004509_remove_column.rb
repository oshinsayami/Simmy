class RemoveColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :products, :cart_id
  end
end
