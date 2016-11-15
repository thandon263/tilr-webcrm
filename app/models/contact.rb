class Contact < ApplicationRecord
  validate :first_name, :last_name, :address, :state, :gender

  # Searchkick learns what your users are looking for
  
end
