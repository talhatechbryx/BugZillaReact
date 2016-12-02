class User < ApplicationRecord
  enum role: [:manager, :developer, :qa]
  after_save :set_default_role, :if => :new_record?

  def set_default_role
    self.role ||= :manager
  end

  has_many :tasks
  has_and_belongs_to_many :projects

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
