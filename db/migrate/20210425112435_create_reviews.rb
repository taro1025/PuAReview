class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :name, null: false
      t.references :pua, null: false, foreign_key: true
      t.integer :star, null: false
      t.string :text, null: false
      t.boolean :active, null: false, default: false

      t.timestamps
    end
  end
end
