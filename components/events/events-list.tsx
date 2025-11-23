"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button, IconCircleButton } from "@/components/ui/button";
import { EVENTS } from "@/lib/constants";
import Image from "next/image";

export function EventsList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [eventType, setEventType] = useState<"upcoming" | "past">("upcoming");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  const categories = Array.from(new Set(EVENTS.map((e) => e.category)));

  const filteredEvents = EVENTS.filter(
    (e) => e.isUpcoming === (eventType === "upcoming")
  ).filter((e) => (selectedCategory ? e.category === selectedCategory : true));

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const paginatedEvents = filteredEvents.slice(
    startIndex,
    startIndex + eventsPerPage
  );

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleEventTypeChange = (type: "upcoming" | "past") => {
    setEventType(type);
    setCurrentPage(1);
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Event Type Tabs */}
        <div className="mb-12 flex gap-3 flex-wrap">
          <button
            onClick={() => handleEventTypeChange("upcoming")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer relative overflow-hidden group ${
              eventType === "upcoming"
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/40"
                : "bg-card border border-border text-foreground hover:border-primary/30"
            }`}
          >
            <span className="relative z-10">Upcoming Events</span>
            {eventType === "upcoming" && (
              <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
          <button
            onClick={() => handleEventTypeChange("past")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer relative overflow-hidden group ${
              eventType === "past"
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/40"
                : "bg-card border border-border text-foreground hover:border-primary/50 hover:shadow-md"
            }`}
          >
            <span className="relative z-10">Past Events</span>
            {eventType === "past" && (
              <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Filter by Category
          </h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleCategoryChange(null)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 cursor-pointer border ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/40"
                  : "bg-card border-border text-foreground hover:border-primary/50 hover:shadow-md"
              }`}
            >
              All Events
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 cursor-pointer border ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/40"
                    : "bg-card border-border text-foreground hover:border-primary/50 hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No events in this category.
              </p>
            </div>
          ) : (
            <>
              {paginatedEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`group rounded-xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden animate-fade-in delay-${Math.min(
                    index,
                    4
                  )}`}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Event Image */}
                    <div className="md:w-1/3 h-64 md:h-auto overflow-hidden bg-linear-to-br from-primary/10 to-accent/10">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Event Content */}
                    <div className="p-8 md:w-2/3 flex flex-col justify-between">
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-semibold">
                            {event.category}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-foreground">
                          {event.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar size={18} />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock size={18} />
                          <span className="font-medium">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin size={18} />
                          <span className="font-medium">{event.location}</span>
                        </div>
                      </div>

                      {event.speakers && event.speakers.length > 0 && (
                        <div className="mb-6 pb-6 border-b border-border">
                          <h4 className="text-sm font-semibold text-foreground mb-3">
                            Speakers
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {event.speakers.map((speaker, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2"
                              >
                                <Image
                                  src={speaker.image || "/placeholder.svg"}
                                  alt={speaker.name}
                                  width={40}
                                  height={40}
                                  className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                  <p className="text-xs font-semibold text-foreground">
                                    {speaker.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {speaker.role}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* CTA Buttons */}
                      <div className="flex gap-3 flex-wrap">
                        <Link href={`/events/${event.id}`}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-pointer bg-popover"
                          >
                            View Details
                            <ArrowRight size={16} />
                          </Button>
                        </Link>
                        <Link href={event.link}>
                          <Button size="sm" className="cursor-pointer">
                            {eventType === "upcoming"
                              ? "Register Now"
                              : "View Recording"}
                            <ArrowRight size={16} />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  {/* Previous Button */}
                  <IconCircleButton
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft size={20} />
                  </IconCircleButton>

                  {/* Page Numbers */}
                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 rounded-full font-semibold transition-all cursor-pointer flex items-center justify-center ${
                            currentPage === page
                              ? "bg-primary text-primary-foreground shadow-lg"
                              : "bg-card border border-border hover:bg-primary hover:text-primary-foreground"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  {/* Next Button */}
                  <IconCircleButton
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight size={20} />
                  </IconCircleButton>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
