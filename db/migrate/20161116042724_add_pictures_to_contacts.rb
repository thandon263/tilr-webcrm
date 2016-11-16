class AddPicturesToContacts < ActiveRecord::Migration[5.0]
  def change
    add_column :contacts, :picture, :json
  end
end
