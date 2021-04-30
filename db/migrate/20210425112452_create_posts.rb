class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :name, null: false
      t.references :pua, null: false, foreign_key: true
      t.string :text, null: false

      t.timestamps
    end
  end
end
