class CreateContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.text :address
      t.string :gender
      t.string :state

      t.timestamps
    end
  end
end
