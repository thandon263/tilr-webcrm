json.extract! contact, :id, :first_name, :last_name, :address, :age, :position, :created_at, :updated_at
json.url contact_url(contact, format: :json)