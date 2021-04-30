class CreatePuas < ActiveRecord::Migration[6.1]
  def change
    create_table :puas do |t|
      t.string :name, null: false
      t.integer :sex, null: false
      t.string :twitterAccountUrl, null: false

      t.timestamps
    end
  end
end
