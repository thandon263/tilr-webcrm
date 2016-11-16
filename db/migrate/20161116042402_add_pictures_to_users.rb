class AddPicturesToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :picture, :json
  end
end
