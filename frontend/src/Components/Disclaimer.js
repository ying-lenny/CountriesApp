import React from "react";
import { Link } from "react-router-dom";

export default function Disclaimer() {
  return (
    <section className="disclaimer">
      <p>
        Made by Owen Lenihan using the&nbsp;
        <Link target="_blank" to="https://restcountries.com/#endpoints-name">REST Countries API</Link>
      </p>
    </section>
  )
}