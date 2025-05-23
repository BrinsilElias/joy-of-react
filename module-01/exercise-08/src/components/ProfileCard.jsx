import React from "react";

// GOAL:
// Render an unordered list with the class
// “badge-list” when the user has at least
// 1 badge.
//
// Each badge is an object with this shape:
// { slug: string, label: string }
//
// STRETCH:
// If the user has 3+ badges, the “golden”
// class should be added to the unordered
// list (in addition to “badge-list”).

function ProfileCard({ profile }) {
  return (
    <article className="profile-card">
      <header>
        <img alt={profile.imageAlt} src={profile.imageSrc} />

        <h2>{profile.name}</h2>
        <p className="joined">Joined {profile.joinDate}</p>
      </header>
      {profile.badges.length > 0 && (
        <ul
          class={profile.badges.length > 3 ? "golden badge-list" : "badge-list"}
        >
          {profile.badges.map((badge) => (
            <li key={badge.slug}>{badge.label}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default ProfileCard;
