class Project < ApplicationRecord

  has_many :bugs
  has_and_belongs_to_many :users
  # has_many :photos, as: :photoable, dependent: :destroy
  # accepts_nested_attributes_for :photos #this one
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

end