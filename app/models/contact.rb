class Contact < ApplicationRecord
  # Each of these scopes defines a class method on Contact
  include Filterable

  validate :first_name, :last_name, :address, :state, :gender
  belongs_to :user
  # Searchkick learns what your users are looking for
  mount_uploader :picture, PictureUploader

  # User Avatar Validation
  validates_integrity_of :picture
  validates_processing_of :picture

  private
    def picture_size_validation
      errors[:picture] << "should be less than 500KB" if picture.size > 0.5.megabytes
    end
end
