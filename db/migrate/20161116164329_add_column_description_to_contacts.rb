class AddColumnDescriptionToContacts < ActiveRecord::Migration[5.0]
  def change
    add_column :contacts, :description, :json
  end
end
